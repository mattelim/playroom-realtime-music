import { useState } from "react";

import Layout from "/layouts/Layout2";
import FavoritesPage from "/components/FavoritesPage";


export default function Index() {

  const [songs, setSongs] = useState([]);

  return (
    <FavoritesPage songs={songs} setSongs={setSongs}/>
  )
};

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}