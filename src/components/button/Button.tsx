interface Props {
  label: string;
  icon: string;
}

export default function Button({ label, icon }: Props) {
  return (
    <button>
      ({icon}) - {label}
    </button>
  );
}
