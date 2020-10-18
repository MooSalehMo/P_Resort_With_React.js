import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktailes",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae illum quam voluptas quaerat dolore, amet quasi sed rem repellat eaque quae corrupti magni saepe perspiciatis porro ipsam incidunt vero doloribus."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae illum quam voluptas quaerat dolore, amet quasi sed rem repellat eaque quae corrupti magni saepe perspiciatis porro ipsam incidunt vero doloribus."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae illum quam voluptas quaerat dolore, amet quasi sed rem repellat eaque quae corrupti magni saepe perspiciatis porro ipsam incidunt vero doloribus."
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>

      </section>
    )
  }
}
 