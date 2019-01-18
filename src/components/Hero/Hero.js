import React from 'react';
import classes from './Hero.module.scss';

const hero = () => (
    <section className={classes.Hero}>
        <div className={classes.Hero__text_container}>
            <h1 className={classes.Hero__title}>Prachtige gratis afbeeldingen</h1>
            <h4 className={classes.Hero__subtitle}>Ontdek meer dan 1,6 miljoen afbeeldingen en video's gedeeld door onze genereuze community.</h4>
        </div>
    </section>
);

export default hero;