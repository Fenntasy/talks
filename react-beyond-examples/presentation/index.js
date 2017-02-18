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
  allonsy: require("../assets/allonsy.gif"),
  itsfrench: require("../assets/itsfrench.gif"),
  router: require("../assets/router.gif"),
  sonic: require("../assets/sonic.gif"),
  flash: require("../assets/flash.gif"),
  sonicfalls: require("../assets/sonicfalls.gif"),
  wonka: require("../assets/wonka.jpg"),
  reactPerfs: require("../assets/react-perfs.png"),
  ryan: require("../assets/ryanflorence.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ccc"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="bar">
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React beyond examples
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={3} textColor="black">
              Quick presentation
            </Heading>
            <Heading size={1} lineHeight={1} textColor="black">
              Vincent Billey
            </Heading>
            <Heading size={1} lineHeight={1} textColor="black">
              @Fenntasy
            </Heading>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React goes fast
            </Heading>
            <Image src={images.sonic} height="35vh" />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              JS goes faster
            </Heading>
            <Image src={images.flash} height="35vh" />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Avoid JS fatigue
            </Heading>
            <Image src={images.sonicfalls} height="35vh" />
          </Slide>
          <Slide>
            <List>
              <ListItem>Don't start with a boilerplate</ListItem>
              <Appear>
                <ListItem>Limit external libs</ListItem>
              </Appear>
              <Appear>
                <ListItem>Don't try to know everything in depth</ListItem>
              </Appear>
              <Appear>
                <ListItem>Just try to know what exists (twitter)</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React-router
            </Heading>
            <Image src={images.router} height="35vh" />
          </Slide>
          <Slide maxHeight="none">
            <CodePane
              lang="js"
              source={require("raw!../assets/react-router.js.raw")}
              margin="0px auto"
            />
          </Slide>
          <Slide maxHeight="none">
            <CodePane
              lang="js"
              source={require("raw!../assets/react-router-2.js.raw")}
              margin="0px auto"
            />
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React-intl
            </Heading>
            <div style={{display: "flex"}}>
              <Image src={images.allonsy} height="35vh" />
              <Image src={images.itsfrench} height="35vh" />
            </div>
          </Slide>
          <Slide>
            <Heading size={1} fit textColor="black" margin="0 0 20px 0">
              v1 wasn't great, v2 is better
            </Heading>
            <List>
              <Appear>
                <ListItem>But still in development</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  babel plugin that extract messages from your files
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Link href="https://github.com/yahoo/react-intl/issues/162">see the github discussion for doc</Link>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide maxHeight="none">
            <CodePane
              lang="js"
              source={require("raw!../assets/react-intl-1.js.raw")}
              margin="0px auto"
            />
          </Slide>
          <Slide maxHeight="none">
            <Heading fit margin="0 0 20px 0" textColor="black">
              Pluralize one language apps
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/react-intl.js.raw")}
              margin="0px auto"
            />
            <Text textSize="1.5em" margin="20px 0 0">▼</Text>
            <Text textSize="1.5em" margin="20px 0 0">Hello <strong>Eric</strong>  , you have 1,000 messages.</Text>
          </Slide>
          <Slide>
            <Heading caps textColor="black">
              Other useful components
            </Heading>
            <List>
              <Appear>
                <ListItem>react-select</ListItem>
              </Appear>
              <Appear>
                <ListItem>FixedDataTable</ListItem>
              </Appear>
              <Appear>
                <ListItem>Draft.js</ListItem>
              </Appear>
              <Appear>
                <ListItem>classnames</ListItem>
              </Appear>
              <Appear>
                <ListItem>look at the code before adding others...</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading caps textColor="black">
              Best practices & opinions
            </Heading>
            <Image src={images.wonka} />
          </Slide>
          <Slide>
            <Heading textColor="black">Use eslint and react-eslint</Heading>
          </Slide>
          <Slide>
            <Heading textColor="black" lineHeight="2em">Use propTypes</Heading>
            <Heading size={1} fit caps textColor="black">
              That's no types but better than nothing
            </Heading>
          </Slide>
          <Slide>
            <Heading fit margin="0 0 20px 0" textColor="black">
              React Addons Perf
            </Heading>
            <Appear>
              <CodePane
                lang="js"
              >
{`if (process.env.NODE_ENV === "development") {
  import "react-addons-perf"
}`}
              </CodePane>
            </Appear>
            <List>
              <Appear>
                <ListItem>Perf.start() from the console</ListItem>
              </Appear>
              <Appear>
                <ListItem>Perform actions</ListItem>
              </Appear>
              <Appear>
                <ListItem>Perf.stop() from the console</ListItem>
              </Appear>
              <Appear>
                <ListItem>Perf.printWasted()</ListItem>
              </Appear>
              <Appear>
                <ListItem>You could do that with a dev button</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Image src={images.reactPerfs} width="100%" />
          </Slide>
          <Slide>
            <Heading textSize="3em" textColor="black">ImmutableJS and shouldComponentUpdate</Heading>
          </Slide>
          <Slide>
            <Heading textSize="3em" textColor="black" margin="0 0 20px 0">Avoid bind if you can</Heading>
            <Appear>
              <CodePane lang="js">
{`const List = React.createClass({
  handleClick (id) {
    this.props.onClick(id)
  },
  render () {
    return (
      <div className="list">
          {this.props.items.map((item, index) => (
              <li
                key={index}
                onClick={this.handleClick.bind(this, item.id)}
              >
                {item.name}
              </li>
          ), this)}
      </div>
    )
  }
})`}
              </CodePane>
            </Appear>
          </Slide>
          <Slide maxHeight="none">
            <CodePane lang="js">
{`const List = React.createClass({
  handleClick (id) {
    this.props.onClick(id)
  },
  render () {
    return (
      <div className="list">
        {this.props.items.map((item, index) => (
          <ListItem key={index} item={item}
            onClick={this.handleClick} />
        ), this)}
      </div>
    )
  }
})
const ListItem = React.createClass({
  handleClick () {
    this.props.onClick(this.props.item.id)
  },
  render () {
    const { item } = this.props
    return (
      <li onClick={this.handleClick}>
        {item.name}
      </li>
    )
  }
})`}
            </CodePane>
          </Slide>
          <Slide>
            <Heading fit caps size={1} lineHeight={1} textColor="black">
              Go functional
            </Heading>
            <Text>And join LilleFP on Meetup</Text>
          </Slide>
          <Slide>
            <Heading fit margin="0 0 20px 0" textColor="black">
              Useful twitter accounts
            </Heading>
            <List>
              <ListItem><Link href="https://twitter.com/reactjs">@reactjs</Link> for news</ListItem>
              <ListItem><Link href="https://twitter.com/Vjeux">@Vjeux</Link> for news and care</ListItem>
              <ListItem><Link href="https://twitter.com/dan_abramov">@dan_abramov</Link> for redux & lots of insights</ListItem>
              <ListItem>
                <Link href="https://twitter.com/mjackson">@mjackson</Link>
                  & <Link href="https://twitter.com/ryanflorence">@ryanflorence</Link> for react-router
              </ListItem>
              <ListItem><Link href="https://twitter.com/_chenglou">@_chenglou</Link> for react-motion</ListItem>
              <ListItem><Link href="https://twitter.com/cpojer">@cpojer</Link> for relay & jest</ListItem>
              <ListItem><Link href="https://twitter.com/HenrikJoreteg">@HenrikJoreteg</Link> for minimal react</ListItem>
              <ListItem><Link href="https://twitter.com/andrestaltz">@andrestaltz</Link> for rants</ListItem>
            </List>
          </Slide>
          <Slide bgImage={images.ryan} bgDarken={0.35}>
            <Heading caps textColor="white" margin="80px 0 0 0">
              Thanks, any questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
