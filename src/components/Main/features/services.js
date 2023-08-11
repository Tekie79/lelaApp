import { ServiceCard } from "./serviceCard";
export const Services = () => {
  const serviceData01 = {
    iconClass: "fa-solid fa-people-arrows",
    title: "Consulting Services",
    description:
      "We’re here to help you answer the big questions. No fancy hand-waving or jargon, just practical solutions with real results.",
  };
  const serviceData02 = {
    iconClass: "fa-solid fa-person-arrow-up-from-line",
    title: "Talent Services",
    description:
      "We run your apps, so you don’t have to think about it. We'll take your requirements and turn them into reality, with a focus on productivity to make things work better over time.",
  };
  return (
    <div className="home-service">
      <h1 className="home-title">What can we do for you?</h1>
      <div className="home_features">
        <ServiceCard serviceData={serviceData01} />
        <ServiceCard serviceData={serviceData02} />
      </div>
    </div>
  );
};
