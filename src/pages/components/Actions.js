import React from "react";
import Report from "../Report";
import Evidence from "../Evidence";
import Learn from "../Learn";
import Statistics from "../Statistics";
import Organisation from "../Organisation";
import FAQ from "../FAQ";

export default function Actions() {

  return (
      <React.Fragment>
        <div className="row mb-4">
          <Report />

          <Learn />

          <Statistics />
        </div>

        <div className="row">
          <Organisation />

          <Evidence />

          <FAQ />
        </div>

        <div className="row" />
      </React.Fragment>
  );
}
