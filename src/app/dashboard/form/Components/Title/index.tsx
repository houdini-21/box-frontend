interface TitleProps {
  title: string;
  subTitle: string | JSX.Element;
}

const Title = ({ title, subTitle }: TitleProps) => (
  <div className="w-full mb-8">
    <h1 className="text-2xl font-bold text-gray-600">{title}</h1>
    <p className="text-gray-500 font-regular">{subTitle}</p>
  </div>
);

export default Title;
