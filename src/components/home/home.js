import React from 'react';

import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import About from './about/about-container';
import Contact from './contact';
import Landing from './landing/landing-container';
import Opportunities from './opportunities';
import PrimaryGoals from './primary-goals';
import Related from './related';
import Research from './research/research-container';
import { GutterLeft, GutterRight } from './gutter/gutter';

import './home.css';

const Home = () => (
  <>
    <Landing />
    <div className="home__layout">
      <GutterLeft />
      <div className="home__inner">

        <div style={{ marginTop: 20 }}>
          <h1>Building a Gifting Society, in Ways that Fulfill Us</h1>

          To begin with our tools immediately, <a href="/gifting-app">recognize regularly the gifts you're already given</a>. Then...
        </div>

        <div style={{ marginBottom: 50, marginTop: 50 }}>
          <div style={{ display: 'flex', flexWrap: "wrap" }}>
            <div style={{ flex: '50%', padding: 50 }}>

              {/** works via CSS **/}
              <section>
                <details>
                  <summary>
                    <b style={{ fontSize: 'x-large' }}>Click here if you want to build communities via free association.</b>
                  </summary>
                  <details>
                    <summary><b style={{ fontSize: 'large' }}>Announce it.</b></summary>
                    <p>First, show your support for <a href="/pledge">the basic gifting pledge</a>.</p>
                    <p>Then read <a href="/pledge-voluntary">the "voluntary" pledge</a> and, if you agree, sign it and read on.</p>
                  </details>
                  <details>
                    <summary><b style={{ fontSize: 'large' }}>Have time?</b></summary>
                    <p>You can display the voluntary work of others with our app at <a href="https://EndorserSearch.org">EndorserSearch.org</a>. The goal is to build genuinely strong groups built on relationships. Contact us to see more.</p>
                    <p>Someone is probably running an event that you enjoy; contact them and offer free assistance. This grows your capabilities and your resume -- and you can prove participation in our app in a way that is compliant with personal data standards.</p>

                    <p>See if any of our events look interesting, and then join us -- or contact us for help to run your own.</p>
                    <details>
                      <summary><b style={{ fontSize: 'large' }}>Have expertise in programming?</b></summary>
                      <p>If you are interested in building organizations in a self-sovereign way, let's talk. We have <a href="https://endorsersearch.org">an MVP</a>, and we have plans for more general reach. Contact us below.</p>
                    </details>
                    <details>
                      <summary><b style={{ fontSize: 'large' }}>Have expertise in economics & finance?</b></summary>
                      <p>Help organize and publish our <a href="/progress">important statistics, gifts and otherwise</a>.</p>
                      <p>Help us research and publish about widespread, debt-free living, like results from <a href="https://www.givedirectly.org/research-at-give-directly/">Give Directly</a>, <a href="https://www.mrmoneymustache.com/">Mr. Money Mustache</a>, etc.</p>
                    </details>
                  </details>
                  <details>
                    <summary><b style={{ fontSize: 'large' }}>Have money?</b></summary>
                    <p>If you've got it, money is easy to give, eh! Consider both short- and long-term, both local and global, so that you gain a balance of deep & close relationships alongside the benefits of wider but more shallow impact. We have open-source code to help build & track impact, so let's talk if that's an interest.</p>
                    <p>We expect to grow meaningful collaboration, and you can see examples of our events here. Contact us for real impact via experiences. Just realize we will always value the benefit to future generations over pure monetary payback.</p>
                  </details>
                  <p><a href="/founders">... and see this message if you also want to provide life's basics freely.</a></p>
                </details>
              </section>

            </div>
            <div style={{ flex: '50%', padding: 50 }}>

              {/** works via CSS **/}
              <section>
                <details>
                  <summary>
                    <b style={{ fontSize: 'x-large' }}>Click here if you want to provide life's basics freely.</b>
                  </summary>
                  <details>
                    <summary><b style={{ fontSize: 'large' }}>Announce it.</b></summary>
                    <p>First, show your support for <a href="/pledge">the basic gifting pledge</a>.</p>
                    <p>Read <a href="/pledge-pursuit">the "pursue" pledge</a> and, if you agree, sign it and read on.</p>
                  </details>
                  <details>
                    <summary><b style={{ fontSize: 'large' }}>Have time?</b></summary>
                    <p>Volunteer at a local food bank; if none are near you then try tools like <a href="https://ShareBay.org">ShareBay</a> and <a href="https://olioapp.com">Olio</a>. If you get recipients to log their appreciation for gifts in the Endorser app, there is even more visibility when they are paid forward.</p>
                    <details>
                      <summary><b style={{ fontSize: 'large' }}>Have expertise in programming?</b></summary>
                      <p>We are building new features at <a href="https://ShareBay.org">ShareBay</a> and you're welcome to join us.</p>
                    </details>
                  </details>
                  <details>
                    <summary><b style={{ fontSize: 'large' }}>Have money?</b></summary>
                    <p>We are in contact with individuals who are willing to demonstrate a basic livelihood, starting with food. Let's talk if you'd like to help grow this kind of giving.</p>
                  </details>
                  <p><a href="/founders">... and see this message if you also want to build communities via free association.</a></p>
                </details>
              </section>

            </div>
          </div>
        </div>

        <About />
        <PrimaryGoals />
        <Research />
        <Opportunities />
        <Related />
        <Contact />
      </div>
      <GutterRight />
    </div>
  </>
);

export default Home;
