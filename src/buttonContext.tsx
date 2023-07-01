import React, { createContext, useState } from 'react';

interface ButtonContextProps {
  children: React.ReactNode;
}

interface ButtonContextState {
  buttonClicked: string;
  handleButtonClick: (button: string) => void;
}

const ButtonContext = createContext<ButtonContextState>({
  buttonClicked: '',
  handleButtonClick: () => {},
});

const ButtonProvider: React.FC<ButtonContextProps> = ({ children }) => {
  const [buttonClicked, setButtonClicked] = useState('');

  const handleButtonClick = (button: string) => {
    setButtonClicked(button);
  };

  return (
    <ButtonContext.Provider value={{ buttonClicked, handleButtonClick }}>
      {children}
    </ButtonContext.Provider>
  );
};

export { ButtonContext, ButtonProvider };
