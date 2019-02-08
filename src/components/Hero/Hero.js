import React from 'react';
import classes from './Hero.module.scss';

// component imports
import Form from '../../containers/Form/Form';

const hero = (props) => (
    <section className={classes.Hero}>
        <div className={classes.Hero__content}>
            <h1 className={classes.Hero__title}>Prachtige gratis afbeeldingen</h1>
            <h4 className={classes.Hero__subtitle}>Ontdek meer dan 1,6 miljoen afbeeldingen en video's gedeeld door onze genereuze community.</h4>
            <Form />
        </div>
    </section>
);


export default hero;