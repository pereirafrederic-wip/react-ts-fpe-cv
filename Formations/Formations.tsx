import React, { memo } from "react";
import data from "./data.json";
import Formation from "./Formation/Formation";

import {} from "bulma";

interface IProps {}

export default memo((props: IProps) => {
  console.log("MEMO Formations RENDERING");

  return (
    <div className="modal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Formations</p>
          <button className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          <div className=" Formations">
            <div className="title">
              {data.map(formation => (
                <Formation formation={formation} />
              ))}
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  );
});
