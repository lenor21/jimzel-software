interface FormErrorProps {
  message: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return <p className='text-[#f00] text-xs mt-1'>{message}</p>;
};

export default FormError;
