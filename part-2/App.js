const App = () => {
    return (
      <div>
        <Tweet
          name="Soldier 76"
          username="notyourdad"
          date={new Date().toDateString()}
          message="Who's hungry?"
        />
        <Tweet
          name="Pharah"
          username="copilot"
          date={new Date().toDateString()}
          message="After this, I'm throwing a party!"
        />
        <Tweet
          name="Ashe"
          username="AsheAndBob"
          date={new Date().toDateString()}
          message="BOB!!! DO SOMETHING"
        />
      </div>
    );
  }