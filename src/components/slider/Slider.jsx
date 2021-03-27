import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import benelli from '../../img/slider/Benelli_M4.jpg'
import shield from '../../img/slider/MP9-Shield-EZ-770.jpg'
import pistol from '../../img/slider/AS9I0112.jpg'
import bexar from '../../img/slider/bexar-arms-TUjn-uSZRJg-unsplash.jpg'
import steve from '../../img/slider/steve-woods-cD2eM-TkE68-unsplash.jpg'
import stngr from '../../img/slider/stngr-industries-D6egwLuXVDU-unsplash (1).jpg'


const AutoplaySlider = withAutoplay(AwesomeSlider);

export const slider = (
    <AutoplaySlider
        play={true}
        bullets={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
    >
        <div data-src={benelli}/>
        <div data-src={shield}/>
        <div data-src={pistol}/>
        <div data-src={bexar}/>
        <div data-src={steve}/>
        <div data-src={stngr}/>
    </AutoplaySlider>
);