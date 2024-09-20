export interface IButton{
    text: string;
    buttonStyle?: string;
}

export interface ILabel{
    label: "Food" | "Tech" | "Research";
}

export interface IBlogCard{
    imageSource: string;
    date: string;
    title: string;
    description: string;
    labelText: "Food" | "Tech" | "Research";
    className?: string;
}