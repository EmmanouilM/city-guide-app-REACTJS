import React from "react";
import "./PlaceItem.css";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const PlaceItem = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className='placeItem'>
      <Card>
        <main className='place-primary-info'>
          <img
            className='place-photo'
            src={
              place.photo
                ? place.photo.images.large.url
                : "https://images.unsplash.com/photo-1415025148099-17fe74102b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"
            }
            alt={place.name}
          />
          <aside>
            <div>
              <h3> {place.name}</h3>
              <div>
                {place.rating && <p>{place.rating}</p>}
                <p>{place.num_reviews} reviews</p>
              </div>
              {place.price_level ? (
                <span>{place.price_level}</span>
              ) : (
                <h6>no price avalaible</h6>
              )}
            </div>
            <div>
              <span>{place.ranking}</span>
            </div>
          </aside>
        </main>
        <main className='place-secondary-info'>
          {place.cuisine && (
            <article className='place-cuisine'>
              {place?.cuisine?.map(({ name }) => (
                <p key={name}>{name} </p>
              ))}
            </article>
          )}
          <article>
            {place?.awards?.map((award) => (
              <span>
                <FontAwesomeIcon className='icon award-icon' icon={faAward} />
                {award.display_name}
              </span>
            ))}
          </article>
          <article>
            {place.address && (
              <span>
                <FontAwesomeIcon
                  className='icon address-icon'
                  icon={faLocationDot}
                />
                {place.address}
              </span>
            )}
            {place.phone ? (
              <span>
                <FontAwesomeIcon className='icon phone-icon' icon={faPhone} />
                {place.phone}
              </span>
            ) : (
              <p>no phone number</p>
            )}
          </article>
          <article>
            <button onClick={() => window.open(place.web_url, "_blank")}>
              Trip Advisor
            </button>
            <button onClick={() => window.open(place.website, "_blank")}>
              Website
            </button>
          </article>
        </main>
      </Card>
    </div>
  );
};

export default PlaceItem;
