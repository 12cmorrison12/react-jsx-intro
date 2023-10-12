const App = () => {
    return (
      <div>
        <Person
          name="Lottie Matthews"
          age={18}
          hobbies={["meditating", "nature walks", "russian roulette"]}
        />
        <Person name="Natalie Scatorccio" 
            age={18} 
            hobbies={["sleeping", "drinking", "telling people they're wrong"]} />
        <Person
          name="Misty Quigley"
          age={17}
          hobbies={["snooping", "proving people wrong", "malpractice"]}
        />
      </div>
    );
  }