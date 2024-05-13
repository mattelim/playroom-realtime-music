import React from "react";

import Layout from '@/layouts/Layout1'
import LoginForm from "@/components/LoginForm";

const Main = () => {

  return (
    <main className="w-full h-full flex items-center justify-center">
      <LoginForm />
    </main>
  );
}

const Home = () => (
  <div className="w-full flex">
    <Main />
  </div>
);

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
