import { useEffect, useRef } from "react";
import styles from "../App.module.css";

type InputWithLabelProps = {
  id: string;
  value: string;
  type?: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused?: boolean;
  children: React.ReactNode;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  children,
  value,
  onInputChange,
  type = "text",
  isFocused,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused, inputRef]);

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {children}{" "}
      </label>
      &nbsp;
      <input
        ref={inputRef}
        onChange={onInputChange}
        type={type}
        id={id}
        value={value}
        className={styles.input}
      />
    </div>
  );
};

export default InputWithLabel;
