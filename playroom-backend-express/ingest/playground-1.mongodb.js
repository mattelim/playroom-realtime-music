/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// Credit: Open Music Archive
// Source: https://openmusicarchive.org/
// By: Ben White & Eileen Simpson

const database = 'playroom';
const collection = 'songs';

let songsArray = [
  {
    "artist": "Clara Smith",
    "track": "Deep Blue Sea Blues",
    "written_by": "Clara Smith (1894 - 1935)",
    "performed_by": "Clara Smith. Saxaphone and piano accompaniment.",
    "recording_date": "n/a",
    "cat_number": "Columbia 14034D (78A)",
    "duration": "03'30\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "female vocal",
      "Clara Smith",
      "Audio",
      "hear me now",
      "1920s",
      "piano",
      "saxophone",
      "Columbia"
    ],
    "download_link": "audio/Deep_Blue_Sea_Blues.mp3"
  },
  {
    "artist": "Virginia Liston",
    "track": "Evil Minded Blues",
    "written_by": "Virginia Liston (1890-1932)",
    "performed_by": "Virginia Liston (vocals), unknown (cornet), unknown (banjo), unknown (piano)",
    "recording_date": "Chicago 29 May 1926",
    "cat_number": "Vocalion 1031",
    "duration": "02'48\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "female vocal",
      "Virginia Liston",
      "viedo",
      "2flowers",
      "Evil",
      "Vocalion",
      "Chicago",
      "1926"
    ],
    "download_link": "audio/Evil_Minded_Blues.mp3"
  },
  {
    "artist": "Virginia Liston",
    "track": "I'm Gonna Get Me A Man That's All",
    "written_by": "Virginia Liston (1890-1932)",
    "performed_by": "Virginia Liston (vocals), unknown (cornet), unknown (banjo), unknown (piano)",
    "recording_date": "Chicago 29 May 1926",
    "cat_number": "Vocalion 1032",
    "duration": "03'04\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "female vocal",
      "1920s",
      "Virginia Liston",
      "1926",
      "I'm gonna get me a man",
      "Chicago"
    ],
    "download_link": "audio/Im_Gonna_Get_Me_A_Man_Thats_All.mp3"
  },
  {
    "artist": "Pine Top Smith",
    "track": "Jump Steady Blues",
    "written_by": "Clarence \"Pine Top\" Smith (1904 - 1929)",
    "performed_by": "Pine Top Smith (piano solo with talking)",
    "recording_date": "n/a",
    "cat_number": "Brunswick 80009 (78A)",
    "duration": "03'18\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "money",
      "piano",
      "Jump Steady Blues",
      "Mp3",
      "male vocal",
      "Brunswick",
      "proto-rap",
      "speaking",
      "solo piano",
      "Pinetop Smith",
      "1920s"
    ],
    "download_link": "audio/Jump_Steady_Blues.mp3"
  },
  {
    "artist": "Virginia Liston",
    "track": "Night Latch Key Blues",
    "written_by": "Virginia Liston (1890-1932)",
    "performed_by": "Virginia Liston (vocals), Ernest Elliot (clarinet), Clarence Williams (piano)",
    "recording_date": "New York 25 October 1924",
    "cat_number": "Okeh 8196",
    "duration": "03'05\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "female vocal",
      "Clarence Williams",
      "Virginia LIston",
      "Okeh",
      "1920s",
      "1924"
    ],
    "download_link": "audio/Night_Latch_Key_Blues.mp3"
  },
  {
    "artist": "Jim Jackson",
    "track": "Old Dog Blue",
    "written_by": "Jim Jackson",
    "performed_by": "Jim Jackson",
    "recording_date": "2.2.1928",
    "cat_number": "Victor 21387-b",
    "duration": "",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "Dog",
      "Memphis",
      "1928",
      "parallel anthology"
    ],
    "download_link": "audio/Old Dog Blue by Jim Jackson.mp3"
  },
  {
    "artist": "Blind Lemon Jefferson",
    "track": "One Dime Blues",
    "written_by": "Blind Lemon Jefferson (d. 1930)",
    "performed_by": "Blind Lemon Jefferson",
    "recording_date": "1927",
    "cat_number": "",
    "duration": "",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "Money",
      "Free-to-air",
      "1920s",
      "1927",
      "Blind Lemon Jefferson",
      "Broke"
    ],
    "download_link": "audio/One_Dime_Blues.mp3"
  },
  {
    "artist": "Pine Top Smith",
    "track": "Pinetop's Blues",
    "written_by": "Clarence Smith (1904-1929)",
    "performed_by": "\"Pine Top\" Smith",
    "recording_date": "1928",
    "cat_number": "Brunswick 03600-A",
    "duration": "02'55\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "vocal",
      "solo",
      "1920s",
      "male vocal",
      "pine top's Blues",
      "not solo",
      "1928"
    ],
    "download_link": "audio/Pinetops_Blues.mp3"
  },
  {
    "artist": "Edna Hicks",
    "track": "Poor Me Blues",
    "written_by": "Edna Hicks (1895-1929)",
    "performed_by": "Edna Hicks; Porter Grainger's Swingin' Three",
    "recording_date": "",
    "cat_number": "Paramount 12089 (78A)",
    "duration": "03'14\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "female vocal",
      "Free-to-air",
      "Blues Edna Hicks",
      "poop",
      "1920s",
      "Paramount",
      "Edna Hicks"
    ],
    "download_link": "audio/Poor_Me_Blues.mp3"
  },
  {
    "artist": "Virginia Liston",
    "track": "Rolls Royce Papa",
    "written_by": "Virginia Liston (1890-1932)",
    "performed_by": "Virginia Liston (vocals), unknown (cornet), unknown (banjo), unknown (piano)",
    "recording_date": "Chicago 29 May 1926",
    "cat_number": "Vocalion 1032",
    "duration": "02'54\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "female vocal",
      "car",
      "Vocalion",
      "Chicago",
      "1920s",
      "1926",
      "Virginia Liston"
    ],
    "download_link": "audio/Rolls_Royce_Papa.mp3"
  },
  {
    "artist": "Virginia Liston",
    "track": "Titantic Blues",
    "written_by": "Virginia Liston (1890-1932)",
    "performed_by": "Virginia Liston (vocals), unknown (cornet), unknown (banjo), unknown (piano)",
    "recording_date": "Chicago 29 May 1926",
    "cat_number": "Vocalion 1031",
    "duration": "03'09\"",
    "license": "Public Domain",
    "genre": "Blues",
    "tags": [
      "1926",
      "1920s",
      "chicago",
      "female vocal",
      "Virginia Liston",
      "Titanic"
    ],
    "download_link": "audio/Titanic_Blues.mp3"
  },
  {
    "artist": "Buster Carter And Preston Young",
    "track": "A Lazy Farmer Boy",
    "written_by": "Buster Carter And Preston Young",
    "performed_by": "Buster Carter And Preston Young",
    "recording_date": "26.6.1931",
    "cat_number": "Columbia 15702-d",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["gg", "Roud 438", "1931", "New York", "parallel anthology", "fiddle"],
    "download_link": "audio/A Lazy Farmer Boy by Buster Carter And Preston Young.mp3"
  },
  {
    "artist": "Kelly Harrell",
    "track": "Charles Giteau",
    "written_by": "",
    "performed_by": "Kelly Harrell",
    "recording_date": "23.3.1927",
    "cat_number": "Victor 20797-a",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["murder", "Roud 444", "Camden, NJ", "1927", "parallel anthology"],
    "download_link": "audio/Charles Giteau by Kelly Harrell.mp3"
  },
  {
    "artist": "Coley Jones",
    "track": "Drunkard's Special",
    "written_by": "",
    "performed_by": "Coley Jones",
    "recording_date": "6.12.1929",
    "cat_number": "Columbia 14489d",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["1929", "Dallas", "parallel anthology", "Roud 114", "Child 274"],
    "download_link": "audio/Drunkards Special by Coley Jones.mp3"
  },
  {
    "artist": "Mississippi John Hurt",
    "track": "Frankie",
    "written_by": "",
    "performed_by": "Mississippi John Hurt",
    "recording_date": "14.2.1928",
    "cat_number": "Okeh 8560",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["Memphis", "1928", "Roud 254", "parallel anthology"],
    "download_link": "audio/Frankie by Mississippi John Hurt.mp3"
  },
  {
    "artist": "William Edens",
    "track": "House Carpenter",
    "written_by": "",
    "performed_by": "William Edens",
    "recording_date": "17.8.1960",
    "cat_number": "",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["Acapella"],
    "download_link": "audio/House Carpenter by William Edens.mp3"
  },
  {
    "artist": "\"Chubby\" Parker And His Old Time Banjo",
    "track": "King Kong Kitchie Kitchie Ki-mi-o",
    "written_by": "",
    "performed_by": "\"Chubby\" Parker And His Old Time Banjo",
    "recording_date": "13.8.1928",
    "cat_number": "Columbia 15296-d",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["1928", "New York", "Roud 16", "parallel anthology"],
    "download_link": "audio/King Kong Kitchie Kitchie Kimio by Chubby Parker And His Old Time Banjo.mp3"
  },
  {
    "artist": "The Masked Marvel",
    "track": "Mississippi Boweavil Blues",
    "written_by": "Charley Patton",
    "performed_by": "The Masked Marvel",
    "recording_date": "14.6.1929",
    "cat_number": "Paramount 12805b",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["1929", "Charley Patton", "parallel anthology", "boll weavil"],
    "download_link": "audio/Mississippi Boweavil Blues by The Masked Marvel.mp3"
  },
  {
    "artist": "Kelly Harrell And The Virginia String Band",
    "track": "My Name Is John Johanna",
    "written_by": "",
    "performed_by": "Kelly Harrell And The Virginia String Band",
    "recording_date": "23.3.1927",
    "cat_number": "Victor 21520-a",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["Camden, NJ", "work", "Roud 257", "1927", "parallel anthology"],
    "download_link": "audio/My Name Is John Johanna by Kelly Harrell And The Virginia String Band.mp3"
  },
  {
    "artist": "Bill And Belle Reed",
    "track": "Old Lady And The Devil",
    "written_by": "",
    "performed_by": "Bill And Belle Reed",
    "recording_date": "17.10.1928",
    "cat_number": "Columbia 15336-d",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["1928", "Roud 160", "Child 278", "parallel anthology"],
    "download_link": "audio/Old Lady And The Devil by Bill And Belle Reed.mp3"
  },
  {
    "artist": "G B Grayson",
    "track": "Ommie Wise",
    "written_by": "",
    "performed_by": "G B Grayson",
    "recording_date": "18.10.1927",
    "cat_number": "Victor 21625",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["Atlanta", "Roud 447", "murder", "1927", "parallel anthology"],
    "download_link": "audio/Ommie Wise by G B Grayson.mp3"
  },
  {
    "artist": "The Carolina Tar Heels",
    "track": "Peg and Awl",
    "written_by": "",
    "performed_by": "The Carolina Tar Heels",
    "recording_date": "14.10.1928",
    "cat_number": "Victor 40007-a",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["work", "Roud 4619", "Atlanta", "1928", "parallel anthology"],
    "download_link": "audio/Peg And Awl by The Carolina Tar Heels.mp3"
  },
  {
    "artist": "Charlie Poole and The North Carolina Ramblers Group",
    "track": "Ragtime Annie",
    "written_by": "trad",
    "performed_by": "Charlie Poole (vocals, 5 string banjo), Posey Rorer (fiddle), Roy Harvey (guitar)",
    "recording_date": "18 Sep 1926",
    "cat_number": "Columbia 15127D",
    "duration": "03'12\"",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": [
      "instrumental",
      "charlie poole",
      "violin",
      "guitar",
      "fiddle",
      "banjo",
      "band",
      "1926",
      "1920s"
    ],
    "download_link": "audio/Ragtime_Annie.mp3"
  },
  {
    "artist": "'Uncle Bunt' Stephens",
    "track": "Sail Away Lady",
    "written_by": "",
    "performed_by": "'Uncle Bunt' Stephens",
    "recording_date": "29.3.1926",
    "cat_number": "Columbia 15071-d",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": [
      "Sail away ladies",
      "parallel anthology",
      "1929",
      "instrumental",
      "fiddle",
      "New York"
    ],
    "download_link": "audio/Sail Away Lady by Uncle Bunt Stephens.mp3"
  },
  {
    "artist": "Dock Boggs",
    "track": "Sugar Baby",
    "written_by": "",
    "performed_by": "Dock Boggs",
    "recording_date": "9.3.1927",
    "cat_number": "Brunswick 118-b",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["poop", "banjo", "male vocal", "1927", "Parallel Anthology"],
    "download_link": "audio/Sugar Baby by Dock Boggs.mp3"
  },
  {
    "artist": "Buell Kazee",
    "track": "The Butcher's Boy",
    "written_by": "",
    "performed_by": "Buell Kazee",
    "recording_date": "16.1.1928",
    "cat_number": "Brunswick 213-a",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["1928", "New York", "Roud 409", "parallel anthology"],
    "download_link": "audio/The Butchers Boy by Buell Kazee.mp3"
  },
  {
    "artist": "Clarence Ashley",
    "track": "The House Carpenter",
    "written_by": "",
    "performed_by": "Clarence Ashley",
    "recording_date": "14.4.1930",
    "cat_number": "Columbia 15654",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["Atlanta", "Child 243", "Roud 14", "parallel anthology", "1930"],
    "download_link": "audio/The House Carpenter by Clarence Ashley.mp3"
  },
  {
    "artist": "Buell Kazee",
    "track": "The Wagoner's Lad",
    "written_by": "",
    "performed_by": "Buell Kazee",
    "recording_date": "18.1.1928",
    "cat_number": "Brunswick 213-b",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["1928", "New York", "Roud 414", "parallel anthology"],
    "download_link": "audio/The Wagoners Lad by Buell Kazee.mp3"
  },
  {
    "artist": "Jilson Setters",
    "track": "The Wild Wagoner",
    "written_by": "",
    "performed_by": "Jilson Setters",
    "recording_date": "27.2.1928",
    "cat_number": "Victor 21353-a",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["New York", "instrumental", "1928", "parallel anthology", "fiddle"],
    "download_link": "audio/The Wild Wagoner by Jilson Setters.mp3"
  },
  {
    "artist": "Prince Albert Hunt's Texas Ramblers",
    "track": "Wake Up Jacob",
    "written_by": "",
    "performed_by": "Prince Albert Hunt's Texas Ramblers",
    "recording_date": "26.6.1929",
    "cat_number": "Okeh 45375",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["Okeh 45375", "instrumental", "fiddle", "parallel anthology", "dallas", "1929"],
    "download_link": "audio/Wake Up Jacob by Prince Albert Hunts Texas Ramblers.mp3"
  },
  {
    "artist": "Charlie Poole With The North Carolina Ramblers",
    "track": "White House Blues",
    "written_by": "",
    "performed_by": "Charlie Poole With The North Carolina Ramblers",
    "recording_date": "20.9.1926",
    "cat_number": "Columbia 15099-d",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["murder", "Roud 787", "New York", "1926", "parallel anthology"],
    "download_link": "audio/White House Blues by Charlie Poole With The North Carolina Ramblers.mp3"
  },
  {
    "artist": "Burnett And Rutherford",
    "track": "Willie Moore",
    "written_by": "",
    "performed_by": "Burnett And Rutherford",
    "recording_date": "3.11.1927",
    "cat_number": "Columbia 15314-d",
    "duration": "",
    "license": "Public Domain",
    "genre": "Folk",
    "tags": ["country", "Roud 4816", "1927", "Atlanta", "parallel anthology"],
    "download_link": "audio/Willie Moore by Burnett And Rutherford.mp3"
  },
  {
    "artist": "George Lewis & His New Orleans Stompers",
    "track": "Don't Go 'Way Nobody",
    "written_by": "Buddy Bolden (1868-1931)",
    "performed_by": "George Lewis (clarinet), Avery 'Kid' Howard (trumpet), Jim Robinson (trombone) Lawrence Marrero (banjo), Edgar Mosley (drums), Chester Zardis (bass)",
    "recording_date": "New Orleans, May 16 1943",
    "cat_number": "Climax 105-A",
    "duration": "04'05\"",
    "license": "Public Domain",
    "genre": "Jazz",
    "tags": [
      "Don't go 'way nobody",
      "instrumental",
      "washboard",
      "banjo",
      "clarinet",
      "trombone",
      "group",
      "trumpet",
      "1943",
      "New Orleans Stompers",
      "George Lewis",
      "Climax 105-A",
      "new orleans jazz",
      "Don't go",
      "jaz",
      "max"
    ],
    "download_link": "audio/Dont_Go_Way_Nobody.mp3"
  },
  {
    "artist": "Jess Stacy",
    "track": "In The Dark-Flashes",
    "written_by": "Bix Beiderbeck (1903-1931)",
    "performed_by": "Jess Stacy",
    "recording_date": "1935",
    "cat_number": "PARLOPHONE R 2233",
    "duration": "03'17\"",
    "license": "Public Domain",
    "genre": "Jazz",
    "tags": [
      "instrumental",
      "piano",
      "moody",
      "solo",
      "Free-to-air",
      "in the dark",
      " instrumental ",
      "Widow's Row",
      "moody instru",
      "weird",
      "crackling piano music upbeat",
      "Mp3",
      "happy",
      "horror",
      "record player",
      "Jess Stacy",
      "Download MP3",
      "living"
    ],
    "download_link": "audio/In_The_Dark_Flashes.mp3"
  },
  {
    "artist": "Open Music Archive",
    "track": "Beat 10",
    "written_by": "Open Music Archive",
    "performed_by": "",
    "recording_date": "2013",
    "cat_number": "",
    "duration": "",
    "license": "(cc) by-sa 4.0",
    "genre": "Beat",
    "tags": [
      "recording",
      "Rap Beat",
      "Atlanta",
      "ATL 2067"
    ],
    "download_link": "audio/ATL/ATL BEAT 10.mp3"
  },
  {
    "artist": "DJ Assault",
    "track": "Georgia Stomp",
    "written_by": "DJ Assault",
    "performed_by": "",
    "recording_date": "",
    "cat_number": "",
    "duration": "3:02",
    "license": "(cc) by-sa 4.0",
    "genre": "Beat",
    "tags": [
      "HipHop",
      "Atlanta",
      "ATL 2067"
    ],
    "download_link": "audio/Georgia Stomp By Dj Assault.mp3"
  }
]


// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

// Insert documents into the collection.
db[collection].insertMany(songsArray);

// Find all documents in the collection.
db[collection].find({});
// The `find` command returns a cursor to the matching documents.
// To access the documents, you need to iterate the cursor.
// You can use `toArray` to convert the cursor to an array of documents.
db[collection].find({}).toArray();



// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
