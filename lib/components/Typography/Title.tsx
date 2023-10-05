import React from "react";

type PropTypes = {
  children: React.ReactNode;
  level?: number;
  className?: string;
};

const Title: React.FC<PropTypes> = ({ children, className, level }) => {
  if (level === 1)
    return <h1 className="text-slate-600 text-2xl font-light">{children}</h1>;
  if (level === 2)
    return <h2 className="text-slate-700 text-xl font-base">{children}</h2>;
  if (level === 3)
    return <h3 className="text-slate-800 text-lg font-bold">{children}</h3>;
  if (level === 4)
    return <h4 className="text-slate-900 text-md font-base">{children}</h4>;
  return <h5 className={"test-red-500 " + className}>{children}</h5>;
};

export { Title };
