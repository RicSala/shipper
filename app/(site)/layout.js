import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "@/components/container";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar/nav-bar";
export const dynamic = "force-dynamic";

const SiteLayout = async ({ children }) => {
  const currentUser = await getCurrentUser();

  // REVIEW: why not passing current user to children through the layout?
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <NavBar currentUser={currentUser} />
      <Container className={"pt-12 sm:pt-12 md:pt-24"}>
        {/* <Container> */}
        {children}
        {/* </Container> */}
      </Container>
      <Footer />
    </div>
  );
};
export default SiteLayout;
