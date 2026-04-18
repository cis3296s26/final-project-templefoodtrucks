import { PageMain } from "../components/PageMain";
import MainPageTitle from "../components/MainPageTitle";

export default function Home() {
  return (
    <PageMain>
      <MainPageTitle
        title="What is Temple Food Trucks?"
        description="About us, our product, and our goal"
      />
      <h1 className="text-4xl mb-5">
        <i>A New Way To Find Food On Campus</i>
      </h1>
      <p className="mb-4 text-base leading-relaxed">
        Temple Food Trucks is a project developed by Temple students for the
        Temple community. This website aims to help both food truck owners and
        food truck fanatics such as ourselves. Whether you are a truck owner who
        wants to display up to date information and hours about your truck, or
        if you are a passerby looking to see what options are available to you,
        Temple Food Trucks has it all!
      </p>
      <h1 className="mt-5 text-md">
        Rate your favorite food trucks here! Link:
      </h1>
      <h1 className="mt-5">
        Project Members: Nathan Cherny, Andrew Nieves, Adil Syed, Felix
        Hardjana, Avenue Goldberg
      </h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Temple_T_logo.svg/1280px-Temple_T_logo.svg.png"
        alt="Temple Logo"
        className="w-full max-w-md mx-auto rounded-lg shadow-md"
      />
      <h1 className="mt-5 text-xs">This projct was last edited 4/12/2026</h1>
    </PageMain>
  );
}
