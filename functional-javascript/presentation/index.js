import React from "react";
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "../src";
import preloader from "../src/utils/preloader";
import createTheme from "../src/themes/default";
import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  graveyard: require("../assets/graveyard.jpg"),
  treefalls: require("../assets/tree-falls.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ececec"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="bar">
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={2} textColor="black">
              Functional Programming
            </Heading>
            <Heading size={1} fit caps lineHeight={2}>
              with javascript
            </Heading>
            <Heading size={1} lineHeight={2} textColor="black">
              (oh yeah)
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit caps textColor="black">
              But why javascript?
            </Heading>
          </Slide>
          <Slide bgImage={images.graveyard.replace("/", "")} />
          <Slide>
            <Heading size={1} fit caps>
              Don't like javascript?
            </Heading>
            <List>
              <ListItem>ScalaJS</ListItem>
              <ListItem>Elm</ListItem>
              <ListItem>ClojureScript</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>
          <Slide>
            <BlockQuote>
              <Quote textColor="gray" style={{fontSize: "3rem", textAlign: "justify"}}>
                In case of conflict, <strong style={{color: "#448aff"}}>consider users over authors over implementors over specifiers over theoretical purity</strong>.
                In other words costs or difficulties to the user should be given more weight than costs to authors;
                which in turn should be given more weight than costs to implementors; which should be given more weight than costs to authors
                of the spec itself, which should be given more weight than those proposing changes for theoretical reasons alone.
                Of course, it is preferred to make things better for multiple constituencies at once.
              </Quote>
              <Cite>
                HTML Design Principles - 3.2. Priority of Constituencies
              </Cite>
            </BlockQuote>
          </Slide>
          <Slide bgImage={images.treefalls.replace("/", "")} bgDarken={0.8}>
            <Heading size={1} lineHeight={2} fit caps textColor="white">
              If a tree falls in a forest
            </Heading>
            <Heading size={1} lineHeight={2} fit caps textColor="white">
              and no one is around to hear it,
            </Heading>
            <Heading size={1} lineHeight={2} fit caps textColor="white">
              does it make a sound?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
