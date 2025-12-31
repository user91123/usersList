import styles from "./styles.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

export const Input = ({ placeholder, className, ...rest }: InputProps) => {
  return (
    <input
      className={`${styles.input} ${className ?? ""}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};
