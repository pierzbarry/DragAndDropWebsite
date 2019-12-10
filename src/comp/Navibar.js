import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { of, fromEvent, animationFrameScheduler } from 'rxjs'
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  switchMap,
  throttleTime,
} from 'rxjs/operators'

import { useObservable } from 'rxjs-hooks'



const watchScroll = () =>
  of(typeof window === 'undefined').pipe(
    filter(bool => !bool),
    switchMap(() => fromEvent(window, 'scroll', { passive: true })),
    throttleTime(0, animationFrameScheduler),
    map(() => window.pageYOffset),
    pairwise(),
    map(([previous, current]) => (current < previous ? 'Up' : 'Down')),
    distinctUntilChanged()
  )

const scrollDirection = useObservable(watchScroll, 'Up')

export const Navibar = () => (
  
    <React.Fragment>
      <article className="App">
        <header
          className={`site-header ${scrollDirection === 'Down' && 'hidden'}`}
        >
          <span>Header</span>
        </header>
        <main>
          {['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].map(
            (color, i) => (
              <section key={`${color}-${i}`} style={{ color: color }}>
                <span>section</span>
              </section>
            )
          )}
        </main>
      </article>
    </React.Fragment >
)