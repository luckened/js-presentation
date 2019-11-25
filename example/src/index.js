import React, { Component } from 'react';

import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Notes,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from '../../src';
import preloader from '../../src/utils/preloader';
import createTheme from '../../src/themes/default';
import Interactive from '../assets/interactive';

require('normalize.css');

const images = {
  abobrinha: require('../assets/abobrinha.gif'),
  angular: require('../assets/angular.png'),
  arpanet: require('../assets/arpanet.jpg'),
  balao: require('../assets/balao.gif'),
  brendan: require('../assets/brendan.jpg'),
  bug: require('../assets/bug.gif'),
  chrome: require('../assets/chrome.png'),
  city: require('../assets/city.jpg'),
  com_framework: require('../assets/com-framework.gif'),
  comendo: require('../assets/comendo.gif'),
  darpa: require('../assets/darpa.jpg'),
  dente: require('../assets/dente.gif'),
  dinheiro: require('../assets/dinheiro.gif'),
  ecma: require('../assets/ecma.png'),
  eisenhower: require('../assets/eisenhower.jpg'),
  electron: require('../assets/electron.png'),
  firefox: require('../assets/firefox.png'),
  hipnose: require('../assets/hipnose.gif'),
  html: require('../assets/html.png'),
  java: require('../assets/java.png'),
  javascript: require('../assets/javascript.png'),
  jim: require('../assets/jim.jpg'),
  kat: require('../assets/kat.gif'),
  lava_olhos: require('../assets/lava-olhos.gif'),
  lingua: require('../assets/lingua.gif'),
  macarena: require('../assets/macarena.gif'),
  markdown: require('../assets/markdown.png'),
  mocha: require('../assets/mocha.png'),
  monstro: require('../assets/monstro.gif'),
  mosaic: require('../assets/mosaic.jpg'),
  netscape: require('../assets/netscape.png'),
  node: require('../assets/node.png'),
  nuvem: require('../assets/nuvem.gif'),
  olhos: require('../assets/olhos.gif'),
  preocupado: require('../assets/preocupado.gif'),
  rasgando: require('../assets/rasgando.gif'),
  react: require('../assets/react.png'),
  sem_framework: require('../assets/sem-framework.gif'),
  tedio: require('../assets/tedio.gif'),
  televisao: require('../assets/televisao.gif'),
  tenso: require('../assets/tenso.gif'),
  terremoto: require('../assets/terremoto.gif'),
  tim: require('../assets/tim.png'),
  v8: require('../assets/v8.png'),
  vaso: require('../assets/vaso.gif'),
  vue: require('../assets/vue.png'),
  www: require('../assets/www.jpg'),
  logo: require('../assets/formidable-logo.svg')
};

preloader(images);

const theme = createTheme({
  primary: '#ff4081'
});

export default class Presentation extends Component {
  constructor() {
    super(...arguments);

    this.updateSteps = this.updateSteps.bind(this);
  }

  state = {
    steps: 0
  };

  updateSteps(steps) {
    if (this.state.steps !== steps) {
      this.setState({ steps });
    }
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.javascript.replace('/', '')} height="380px" width="400px" padding="50px" />
            </Fill>
            <Fill>
              <Heading size={1} fit caps lineHeight={1} textColor="black">
                Java - <br />
                Script
              </Heading>
            </Fill>
          </Layout>
          <Text textSize="1.3em" textColor="white" margin="auto auto 30px" bold>
            uma apresentação sobre javascript
          </Text>
          <Heading size={1} fit caps textColor="black">
            feita em javascript
          </Heading>
          <Text textSize="1.5em" textColor="white" bold>
            por lucca e sávio
          </Text>
          <Link href="https://github.com/luckened/js-presentation">
            <Text textSize="0.5em" bold textColor="black">
              repo no github
            </Text>
          </Link>
        </Slide>


        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="wait-what"
          goTo={4}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="black"
        >
          <Image src={images.televisao.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Introdução
          </Heading>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
          </Heading>
        </Slide>

        <Slide
          /*INTRODUCAO/HISTORIA PT1*/
          bgImage={images.nuvem.replace('/', '')}
          bgDarken={0.75}
          transition={['fade']} textColor="tertiary">
          >
          <Text textSize="4.3em" textColor="blue" margin="auto auto 30px" bold>
            Timeline:
          </Text>
          <Layout>

            <Appear fid="1">
              <Fill>
                <Image src={images.eisenhower.replace('/', '')} margin="0px 0px 0px 0px" />
              </Fill>
            </Appear>

            <Appear fid="2">
              <Fill>
                <Image src={images.darpa.replace('/', '')} margin="0px 0px 0px 0px" />
              </Fill>
            </Appear>

            <Appear fid="3">
              <Fill>
                <Image src={images.arpanet.replace('/', '')} margin="0px 0px 0px 0px" />
              </Fill>
            </Appear>

            <Appear fid="4">
              <Fill>
                <Image src={images.tim.replace('/', '')} margin="0px 0px 0px 0px" />
              </Fill>
            </Appear>

            <Appear fid="5">
              <Fill>
                <Image src={images.www.replace('/', '')} margin="0px 10px 0px 0px" />
              </Fill>
            </Appear>
          </Layout>

          <Layout>
            <Appear fid="6">
              <Fill>
                <Image src={images.html.replace('/', '')} height="150px" width="150px" margin="0px 10px 0px 0px" />
              </Fill>
            </Appear>

            <Appear fid="7">
              <Fill>
                <Image src={images.mosaic.replace('/', '')} height="150px" margin="0px 10px 0px 0px" />
              </Fill>
            </Appear>

            <Appear fid="8">
              <Fill>
                <Image src={images.jim.replace('/', '')} height="175px" width="200px" margin="0px 0px 0px 0px" />
              </Fill>
            </Appear>

            <Appear fid="9">
              <Fill>
                <Image src={images.netscape.replace('/', '')} margin="0px 0px 0px 0px" />
              </Fill>
            </Appear>

          </Layout>

          <Appear fid="10">
            <Heading size={3} caps fit textColor="primary">
              Finalmente...
            </Heading>
          </Appear>
        </Slide>

        <SlideSet
          style={{ backgroundColor: 'blue', border: '10px solid cyan' }}
        >
          <Slide /*HISTORIA PT2*/
            transition={['fade']}
            textColor="tertiary"
            bgImage={images.lingua.replace('/', '')}
            bgDarken={0.25}>
            <List>
              <Layout>
                <Fill>
                  <Appear>
                    <ListItem>Brendan Eich</ListItem>
                  </Appear>
                  <Appear>
                    <Image src={images.brendan.replace('/', '')} height="200px" width="200px" margin="0px 0px 0px" />
                  </Appear>
                </Fill>

                <Fill>
                  <Appear>
                    <ListItem>Mocha / LiveScript</ListItem>
                  </Appear>

                  <Appear>
                    <Image src={images.mocha.replace('/', '')} height="200px" width="200px" margin="0px 0px 0px" />
                  </Appear>
                </Fill>
              </Layout>

              <Layout>
                <Fill>
                  <Appear>
                    <ListItem>Maio de 1995 - Java estava fazendo muito sucesso na época..</ListItem>
                  </Appear>

                  <Appear>
                    <Image src={images.java.replace('/', '')} height="200px" width="300px" margin="0px 0px 0px" />
                  </Appear>
                </Fill>

                <Fill>
                  <Appear>
                    <ListItem>~piggyback~ Dezembro de 1995 - Nasce o JavaScript</ListItem>
                  </Appear>

                  <Appear>
                    <Image src={images.javascript.replace('/', '')} height="200px" width="200px" margin="0px 0px 0px" />
                  </Appear>
                </Fill>
              </Layout>

            </List>
          </Slide>

          <Slide /*HISTORIA PT3*/
            transition={['fade']}
            textColor="tertiary"
            bgImage={images.tedio.replace('/', '')}
            bgDarken={0.75}>
            <List>
              <Layout>
                <Fill>
                  <Appear>
                    <ListItem>1997 - Padronização da linguagem</ListItem>
                  </Appear>
                  <Appear>
                    <Image src={images.ecma.replace('/', '')} height="100px" width="350px" />
                  </Appear>
                </Fill>

                <Fill>
                  <Appear>
                    <ListItem>2002 - treta com a Microsoft e falência da Netscape: Mozilla e o Firefox</ListItem>
                  </Appear>

                  <Appear>
                    <Image src={images.firefox.replace('/', '')} height="200px" width="200px" />
                  </Appear>
                </Fill>
              </Layout>

              <Layout>
                <Fill>
                  <Appear>
                    <ListItem>2008 - Google Chrome</ListItem>
                  </Appear>

                  <Appear>
                    <Image src={images.chrome.replace('/', '')} height="200px" width="200px" />
                  </Appear>
                </Fill>

                <Fill>
                  <Appear>
                    <ListItem>2009 - Motor V8: código Just-In-Time<br />feito em C++</ListItem>
                  </Appear>

                  <Appear>
                    <Image src={images.v8.replace('/', '')} height="175px" width="225px" />
                  </Appear>
                </Fill>

                <Fill>
                  <Appear>
                    <ListItem>2010 - Node.js</ListItem>
                  </Appear>

                  <Appear>
                    <Image src={images.node.replace('/', '')} height="200px" width="225px" />
                  </Appear>
                </Fill>
              </Layout>

            </List>
          </Slide>
        </SlideSet>



        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote textSize="0.8em">JavaScript (sometimes abbreviated JS) is a prototype-based scripting language that is dynamic, weakly typed and has first-class functions. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.</Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>

        <SlideSet
          style={{ backgroundColor: 'blue', border: '10px solid cyan' }}
        >

          <Slide transition={['zoom', 'fade']} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Características
            </Heading>
            <Image src={images.abobrinha.replace('/', '')} />
          </Slide>


          <Slide transition={['fade']} textColor="tertiary">
            <Heading textColor="primary">
              alguns tópicos:
            </Heading>

            <Text></Text>
            <List>
              <Appear>
                <ListItem bulletStyle="classicCheck">Interpretada</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="classicCheck">Multi-paradigma</ListItem>
              </Appear>
              <List>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">Orientada a objetos (e.g. componente classe)</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">Orientada a eventos (e.g. clique do mouse)</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">Funcional</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">Imperativa</ListItem>
                </Appear>
              </List>
              <Appear>
                <ListItem bulletStyle="classicCheck">Tipagem fraca e dinâmica</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade', 'zoom']} textColor="tertiary">
            <Heading textColor="primary">
              mais tópicos:
            </Heading>

            <Text></Text>
            <List>
              <Appear>
                <ListItem bulletStyle="classicCheck">Tipos primitivos</ListItem>
              </Appear>
              <List>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">number</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">string</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">boolean</ListItem>
                </Appear>
              </List>
              <Appear>
                <ListItem bulletStyle="classicCheck">Tudo é objeto</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="classicCheck">Funções são objetos de primeira classe</ListItem>
              </Appear>
              <List>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">podem ter métodos e propriedades</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">podem ser atribuídas às variáveis</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">podem ser passadas como parâmetro/serem retorno de outras funções</ListItem>
                </Appear>
                <Appear>
                  <ListItem bulletStyle="arrow" textSize="0.7em">criadas em tempo de execução</ListItem>
                </Appear>
              </List>
            </List>
          </Slide>

          <Slide transition={['zoom', 'fade']} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Peculiaridades
            </Heading>
            <Image src={images.dinheiro.replace('/', '')} />
          </Slide>

          <Slide transition={['fade']}>
            <Text textSize="1.8em" textColor="primary">
              peculiaridades
            </Text>
            <Text textSize="1.2em">
              operadores or e and
            </Text>
            <Markdown>
              {`
\`\`\`js
function soma ( a, b ) {
  b = b || 0;
  return a + b;
}
soma( 3 ); // 3
\`\`\`
              `}
            </Markdown>

            <Markdown>
              {`
\`\`\`js
"gato" && "cachorro" // "cachorro"
false && 10 // false
\`\`\`      
              `}
            </Markdown>

            <Text textSize="1.2em">
              declaração de strings e testes de igualdade
            </Text>
            <Markdown>
              {`
\`\`\`js
a = '10'
b = "10"
c = \`10\`
d = 10
a == b  // ?
a == c  // ?
a == d  // ?
a === d // ?
b != d  // ?
c !== d  // ?
\`\`\`
              `}
            </Markdown>
          </Slide>





          <Slide transition={['fade']}>
            <Text textSize="1.8em" textColor="primary">
              let, var e const
            </Text>
            <Text textSize="1.2em">
              const
            </Text>
            <Markdown>
              {`
\`\`\`js
void function(){ 
  const mensagem = 'salve'; 
  console.log(mensagem); // salve
  mensagem = 'savinho';
}();
// erro na atribuicao
\`\`\`
              `}
            </Markdown>
            <Text textSize="1.2em">
              var e let: problema do escopo
            </Text>
            <Markdown>
              {`
\`\`\`js
var exibeMensagem = function() {
  if(true) { // escopo isolado dentro da funcao
      var escopoFuncao = 'disney'; 
      let escopoBloco = 'savinho';
      console.log(escopoBloco); // savinho 
  }
  console.log(escopoFuncao); // disney 
  console.log(escopoBloco); // erro na execucao 
}
\`\`\`
              `}
            </Markdown>
          </Slide>

          <Slide transition={['fade']}>
            <Text textSize="1.8em" textColor="primary">
              dando vida ao html
            </Text>
            <Text textSize="1.2em">
              canvas
            </Text>
            <Markdown>
              {`
\`\`\`js
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < maxParticles; i++) {
      let particle = particles[i];
      context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
      for (let j = 0; j < maxParticles; j++) {
          if (i != j) {
              let particle2 = particles[j];
              let distanceX = Math.abs(particle.x - particle2.x);
              let distanceY = Math.abs(particle.y - particle2.y);
              if (distanceX < threshold && distanceY < threshold) {
                  context.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
                  let color = 200 - Math.floor(distanceX + distanceY);
                  context.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
                  line(particle, particle2);
              }
          }
      }
      particle.x = particle.x + particle.vx;
      particle.y = particle.y + particle.vy;
      if (particle.x > canvas.width - particleSize || particle.x < particleSize)
          particle.vx = -particle.vx;
      if (particle.y > canvas.height - particleSize || particle.y < particleSize)
          particle.vy = -particle.vy;
  }
  window.requestAnimationFrame(animate);
}
\`\`\`
              `}
            </Markdown>
          </Slide>


          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Clique no botão
            </Heading>
            <Interactive />
          </Slide>
        </SlideSet>


        <Slide /*INTRODUCAO AS FRAMEWORKS*/ transition={['fade']} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={1} fit textColor="secondary">
                sem framework
                </Heading>
              <Image src={images.sem_framework.replace('/', '')} />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade', 'zoom']} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={1} fit textColor="secondary">
                com framework
                </Heading>
              <Image src={images.com_framework.replace('/', '')} />
            </Fill>
          </Layout>
        </Slide>

        <Slide /*FRAMEWORKS*/
          bgImage={images.comendo.replace('/', '')}
          bgDarken={0.75}
          transition={['fade']} textColor="tertiary">

          <List>
            <Layout>
              <Fill>
                <Appear>
                  <ListItem>Angular</ListItem>
                </Appear>
                <Appear>
                  <Image src={images.angular.replace('/', '')} height="200px" width="200px" />
                </Appear>
              </Fill>

              <Fill>
                <Appear>
                  <ListItem>Electron</ListItem>
                </Appear>

                <Appear>
                  <Image src={images.electron.replace('/', '')} height="200px" width="200px" />
                </Appear>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Appear>
                  <ListItem>React</ListItem>
                </Appear>

                <Appear>
                  <Image src={images.react.replace('/', '')} height="200px" width="200px" />
                </Appear>
              </Fill>

              <Fill>
                <Appear>
                  <ListItem>Vue</ListItem>
                </Appear>

                <Appear>
                  <Image src={images.vue.replace('/', '')} height="175px" width="225px" />
                </Appear>
              </Fill>
            </Layout>

          </List>
        </Slide>




        <Slide transition={['slide']}>
          <Anim
            onAnim={(forwards, animIndex) => {
              /* eslint-disable */
              console.log('forwards ', forwards);
              console.log('animIndex ', animIndex);
              /* eslint-enable */
            }}
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)  scale(1) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale(1.6) rotate(-15deg)'
              },
              {
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, -200px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(200px, 0px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 200px, 0px)  scale(0.8) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(-200px, 0px, 0px)  scale(0.8) rotate(0deg)'
              }
            ]}
            easing={'bounceOut'}
            transitionDuration={500}
          >
            <div>
              <Heading size={6} caps fit textColor="secondary">
                Flexible
                <br />
                animations
              </Heading>
            </div>
          </Anim>
        </Slide>


        <Slide>
          <Heading size={2} textColor="secondary" margin="0.25em">
            Mix it up!
          </Heading>
          <Heading size={6} textColor="tertiary">
            You can even jump to different slides with a standard button or
            custom component!
          </Heading>
          <GoToAction margin="1em" slide={8}>
            Jump to Slide 8
          </GoToAction>
          <GoToAction
            render={goToSlide => (
              <select
                defaultValue=""
                style={{
                  background: '#000',
                  color: '#fff',
                  fontFamily: theme.print.fonts.primary,
                  fontSize: '1.1em'
                }}
                onChange={({ target }) => goToSlide(target.value)}
              >
                <option value="" disabled>
                  Custom Slide Picker
                </option>
                <option value="wait-what">Wait What!? Slide</option>
                <option value={3}>Slide 3</option>
              </select>
            )}
          />
        </Slide>


        <Slide
          transition={['slide']}
          bgDarken={0.75}
          getAnimStep={this.updateSteps}
        >
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Can
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="secondary">
              Count
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps textColor="tertiary">
              Steps
            </Heading>
          </Appear>
          <Heading size={1} caps fit textColor="secondary">
            Steps: {this.state.steps}
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary">
          <Heading caps fit>
            Flexible Layouts
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading
                size={4}
                caps
                textColor="secondary"
                bgColor="white"
                margin={10}
              >
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>


        <Slide
          transition={['zoom']}
          bgColor="tertiary"
          controlColor="primary"
          progressColor="primary"
        >
          <Heading caps fit size={1} textColor="primary">
            Inline Markdown
          </Heading>
          <Markdown>
            {`
  ![Markdown Logo](${images.comendo.replace('/', '')})
            
              You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
              * Lists too!
              * With ~~strikethrough~~ and _italic_
              * And let's not forget **bold**
              * Add some \`inline code\` to your sldes!
                        `}
          </Markdown>
        </Slide>


        {
          MarkdownSlides`
#### Create Multiple Slides in Markdown
All the same tags and elements supported in <Markdown /> are supported in MarkdownSlides.
---
Slides are separated with **three dashes** and can be used _anywhere_ in the deck. The markdown can either be:
* A Tagged Template Literal
* Imported Markdown from another file
---
Add some inline code to your markdown!

\`\`\`js
const myCode = (is, great) => 'for' + 'sharing';
\`\`\`
          `}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>


        <SlideSet
          style={{ backgroundColor: 'blue', border: '10px solid cyan' }}
        >
          <Slide transition={['fade']} textColor="tertiary">
            <List>
              <Appear>
                <Image src={images.bug.replace('/', '')} height="100px" width="300px" margin="0px 0px 0px" />
              </Appear>
              <Appear>
                <ListItem>Autofit text</ListItem>
              </Appear>
              <Appear>
                <ListItem>Flexbox layout system</ListItem>
              </Appear>
              <Appear>
                <ListItem>PDF export</ListItem>
              </Appear>
              <Appear>
                <ListItem bulletStyle="greenCheck">Customized bullets</ListItem>
              </Appear>
              <Appear>
                <ListItem>And...</ListItem>
              </Appear>
            </List>
          </Slide>


          <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive />
          </Slide>
        </SlideSet>


        <Slide transition={['slide']} bgColor="primary">
          <Heading
            size={4}
            caps
            textColor="secondary"
            bgColor="white"
            margin={10}
          >
            Pizza Toppings
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem />
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem />
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide transition={['spin', 'slide']} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="https://www.formidable.com">
            <Image width="100%" src={images.logo} />
          </Link>
        </Slide>
      </Deck >
    );
  }
}
