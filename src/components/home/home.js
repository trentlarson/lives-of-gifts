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

          <p>We aren’t living the lives we crave.</p>

          <p>Most of us imagine a future where we feel peaceful, connected, and free to spend time on what truly matters.</p>

          <p>But that’s not the world we live in. Fear — of not having enough, of losing what we’ve built, of trusting the wrong people — drives many of our choices, and it quietly shapes society. Fear has built systems that isolate us. It’s turned neighbors into competitors, and communities into marketplaces.</p>

          <h2>Gift Economies</h2>

          <p>Gift Economies are about reclaiming connection. They're systems based on trust, voluntary action, and shared wellbeing — where generosity becomes power, not weakness.</p>

          <p>For most of human history, people thrived through relationships, not transactions. Communities took care of one another long before money defined trustless value. Today, technology gives us a chance to bring that back — to rebuild local trust networks where people can share time, skill, and care freely. Gift Economies aren’t anti-money; they're pro-human. They're about using technology to make kindness practical again.</p>

          <h2>Get Started Now</h2>

          <p>We're growing a digital platform that helps people connect locally, share resources, and support one another directly — without middlemen or gatekeepers. Whether it’s sharing a meal, lending a skill, or helping a neighbor, this tool will make generosity easier, safer, and more visible. It’s technology designed not to take your attention — but to give it back to your community.</p>

        </div>



        <div>

          To begin immediately, <a href="/gifting-app">join and recognize regularly the gifts you're already given</a>.

          <br />
          <br />
          <p>Then, to get involved more deeply:</p>
        </div>

        <div style={{ marginBottom: 50 }}>
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
                    <p>Show your support for <a href="/pledge">the basic gifting pledge</a>.</p>
                    <p>Then read <a href="/pledge-voluntary">the "voluntary" pledge</a> and, if you agree, sign it and read on.</p>
                  </details>
                  <details>
                    <summary><b style={{ fontSize: 'large' }}>Have time?</b></summary>
                    <p>You can display the voluntary work of others with our app at <a href="https://TimeSafari.org">TimeSafari.org</a>. The goal is to build genuinely strong groups built on relationships. Contact us to see more.</p>
                    <p><a href="https://timesafari.app/discover?hideOnboarding=true">Look for an event that you would enjoy</a>; go through your network on the app to contact them and offer assistance. This grows your capabilities and your resume -- and you can prove participation in our app in a way that is compliant with personal data standards.</p>

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
                    <p>We expect to grow meaningful collaboration, and you can see examples of our events below. Contact us for real impact via experiences. Just realize we will always value the benefit to future generations over pure monetary payback.</p>
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
                    <p>Show your support for <a href="/pledge">the basic gifting pledge</a>.</p>
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
