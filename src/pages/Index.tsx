import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import BusinessHours from "@/components/home/BusinessHours";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <WhyChooseUs />
      <ServicesPreview />
      <BusinessHours />
    </Layout>
  );
};

export default Index;
