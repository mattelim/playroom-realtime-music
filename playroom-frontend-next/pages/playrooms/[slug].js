import { useRouter } from "next/router";
import Layout from "/layouts/Layout2";
import PlayroomPage from "@/components/PlayroomPage";

export default function PlayroomsSlug() {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <PlayroomPage roomName={slug} />
  )
};

PlayroomsSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}