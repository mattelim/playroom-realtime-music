import { useState } from "react";

import Layout from "/layouts/Layout2";
import BrowsePage from "/components/BrowsePage";

export default function Index() {
  const [songs, setSongs] = useState([]);

  return (
    <BrowsePage songs={songs} setSongs={setSongs} />
  )
};

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}