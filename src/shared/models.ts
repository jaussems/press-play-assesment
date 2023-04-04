export interface IinputComponent {
  placeholder: string;
  width: string;
  class?: string;
  icon: boolean;
}
export interface IButton {
  text: string;
  isLight?: string;
}

export interface IArticle {
  src: string;
  alt: string;
  header: string;
  paragraph: string;
  class?: string;
  buttonText: string;
  isLightBtn?: boolean;
  tags?: IArrayOfTags;
}

export interface ITag {
  text: string;
}

export interface IArrayOfTags extends Array<ITag> {}

export interface IThemeButton {
  icon: string;
  alt: string;
  text: string;
}

export interface IArrayOfThemeButtons extends Array<IThemeButton> {}

export interface IThemeComponent {
  header: string;
  text: string;
  themebuttons: IArrayOfThemeButtons;
}
