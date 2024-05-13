import mongoose from 'mongoose';
import { User } from '../models/userModel';

export async function dbUserCheck(userToken) {

  await mongoose.connect(process.env.MONGODB_URI);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Perform the check operation (e.g., find an existing user)
    const user = await User.findOne({ _id: userToken.sub }).session(session);
    if (user) {
      // console.log('User found. \nUser:', user);
      return user;
    }

    // Perform the write operation (e.g., create a new user)
    const newUser = new User({
      _id: userToken.sub,
      name: userToken.name,
      email: userToken.email,
      status: 1,
      signedUpDate: new Date(),
    });
    await newUser.save({ session });

    // Commit the transaction if all operations succeed
    await session.commitTransaction();
    session.endSession();

    return newUser;

    console.log('User created successfully.');
  } catch (error) {
    // Handle errors, including concurrency issues
    console.error('Transaction aborted:', error);

    // Rollback the transaction and retry if needed
    await session.abortTransaction();
    session.endSession();

    // Optionally implement retry logic here
  }

  return {
    oid: "test",
    name: "test",
    email: "test",
    status: -2,
    signedUpDate: new Date(),
  }
}
