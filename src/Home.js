import React from "react";
import { CPage } from "@appcues/component-library";
import FlowListImage from "./flow-list.svg";

function Home() {
  return (
    <CPage textAlign="center">
      <CPage.Container>
        <img src={FlowListImage} alt="Three modals and a tooltip" />
      </CPage.Container>
    </CPage>
  );
}

export default Home;
