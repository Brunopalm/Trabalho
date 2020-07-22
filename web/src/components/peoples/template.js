import React from "react";

export function Discentes({ ...peoples }) {
  return (
    <div key={peoples.id} id={peoples.id}>
      <div className="in-left position-slider">
        <div className="full-card">
          <div className="fade-in cabin-card">
            <div className="font-card">
              <img alt={peoples.id} src={peoples.imageUrl} />
            </div>
          </div>
          <div className="fade-in font-description">
            <p className="font--cabin">{peoples.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Professores({ ...peoples }) {
  return (
    <div key={peoples.id} id={peoples.id}>
      <div className="in-left wrapper">
        <div className="card wizard">
          <div className="card__image card__image--wizard">
            <img src={peoples.imageUrl} alt="wizard" />
          </div>
          <div className="card__unit-name">{peoples.name}</div>
          <div className="card__unit-description">{peoples.description}</div>
        </div>
      </div>
    </div>
  );
}
export function Administração({ ...peoples }) {
  return (
    <div key={peoples.id} id={peoples.id}>
      <div className="in-left position-slider">
        <div className="full-card">
          <div className="fade-in cabin-card">
            <div className="fade in font-card">
              <h3 className="font--cabin">Sala</h3>
              <p className="font--cabin">{peoples.hall}</p>
            </div>
          </div>
          <div className="fade-in font-description">
            <h3 className="font--lobster">{peoples.adminPosition}</h3>
            <h2 className="font--cabin">{peoples.name}</h2>
            <p className="font--cabin">{peoples.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
