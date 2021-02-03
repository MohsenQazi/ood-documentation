/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Testimonials">
      <div
        style={{
          display: 'flex',
          padding: '10px 400px',
        }}>
        <section>
          <h1 id="community-testimonials">Community Testimonials</h1>
          <p>
            Don’t take just our word for how great Open OnDemand is! Here are
            some comments from our engaged community!
          </p>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              I will say as well, from a systems administration perspective,
              that based on my experience deploying application stacks like
              this, OOD appears to be a very high quality suite of software.
              Several times in working with OOD, I have been pleasantly
              surprised at how thoughtful the architecture is.
            </p>
            <footer>Nick Dusek, North Dakota State University</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              We are really excited about launching this service and the impact
              it will have on our users - its a very significant modernization
              of our interface.
            </p>
            <footer>Eric Appelt, Vanderbilt University</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              Over all, the application works great. It is exactly what we want
              to see as a modernization of the HPC user experience.
            </p>
            <footer>
              John-Paul Robinson, The University of Alabama at Birmingham
            </footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              I'm happy to say that we are now using it in production this
              semester, and our faculty and students love it!
            </p>
            <footer>Shawn Sivy, The College of New Jersey</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              We love the interface and all of the tools in OOD. It seems to
              provide almost every feature that a user would need to use their
              HPC environment.
            </p>
            <footer>Avi Gundimeda, University of Massachusetts Amherst</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              I’m very optimistic that OnDemand will make our compute resources
              much more accessible to broader audience - thank you for sharing
              it.
            </p>
            <footer>Jay DePasse, Pittsburgh Supercomputing Center</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              Thanks for putting together what looks like it's going to be an
              extremely useful tool for our users!
            </p>
            <footer>Kevin Hildebrand, University of Maryland</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              First of all, a BIG thanks to you for making OnDemand - both me
              and our users love it! We have a big biology community among our
              users and anything that makes it easier to overcome "the slurm
              hump" is a big help with users who are not computer- and linux-
              savvy.
            </p>
            <footer>Kristina Plazonic, Rutgers</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              It does look like it could be a really useful tool (great work by
              those involved!)
            </p>
            <footer>Chris Collins, University of Hull</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              I have a cynical engineer whose default evaluation is ‘this
              sucks’. After launching Open OnDemand, he said, ‘this is not bad!
            </p>
            <footer>Ruth Marinshaw, Stanford</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>Okay you were right Ondemand is freakin sweet</p>
            <footer>Chris Franck, Virginia Tech</footer>
          </blockquote>

          <blockquote
            style={{
              mixBlendMode: 'difference',
              color: '#777',
              fontWeight: 'bold',
            }}>
            <p>
              OnDemand makes our efforts and computing resources significantly
              more valuable, and enables us to reach new communities of users.
            </p>
            <footer>John McGee, UNC Chapel Hill</footer>
          </blockquote>

          <h1 id="publications-mentioning-open-ondemand">
            Publications Mentioning Open OnDemand
          </h1>
          <ul>
            <li>
              “Your browser is the supercomputer: On Demand is a no-tears
              shortcut to research-computing”
              <a href="https://www.uab.edu/reporter/resources/tools-technology/item/8749">
                UAB Reporter
              </a>
            </li>
          </ul>

          <h3 id="maintained-by-osc">Maintained by OSC</h3>

          <p>
            This project is maintained by the
            <a href="https://www.osc.edu">Ohio Supercomputer Center (OSC)</a>, a
            member of the{' '}
            <a href="https://www.oh-tech.org/">Ohio Technology Consortium</a>,
            the technology and information division of the
            <a href="https://education.ohio.gov/">
              Ohio Department of Higher Education
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default Hello;