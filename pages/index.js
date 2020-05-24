import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import SpitzSelect from '../src/components/spitzSelect';
import ColorSelect from '../src/components/colorSelect';
import FontSelect from '../src/components/fontSelect';
import NameInput from '../src/components/nameInput';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  submit: {
    width: 300,
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1em',
    background: 'linear-gradient( 45deg, #6D3F91, #fffbd5)',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <section className="container">
      <Head>
        <title>enextDog</title>
        <link rel="icon" href="/logo-ex.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:wght@100&display=swap"
        />
      </Head>
      <section className="mainTitle">
        <h1 className="title">
          enextDog
          <img id="patinha" src="/logo-ex.png" />
        </h1>
      </section>
      <main>
        <div className="grid">
          <div className="card">
            <NameInput />
          </div>
          <div className="card">
            <SpitzSelect />
          </div>

          <div className="card">
            <ColorSelect />
          </div>

          <div className="card">
            <FontSelect />
          </div>
        </div>
        <Button
          className="buttonSave"
          type="submit"
          variant="contained"
          fullWidth
          className={classes.submit}
        >
          Salvar
          <img id="mini" src="/mini.png" />
        </Button>
      </main>
      <section>
        <div className="dogContainer">
          <h4>IMAGEM</h4>
        </div>
      </section>
    </section>
  );
}
