import Home_1 from "./(home)/home-1/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Home-1 || Rascom - Affordable plots for sale",
  description: `We offer affordable and genuine land for sale along strategic locations including Kangundo Road,
   Eastern Bypass, Mombasa Road, and Thika Road.
   Our offerings come with authentic and readily available Title Deeds, ensuring a hassle-free transaction process. `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_1 />
    </Wrapper>
  );
}
