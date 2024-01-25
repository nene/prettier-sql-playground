interface CanonicalSyntaxToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export function CanonicalSyntaxToggle({
  value,
  onChange,
}: CanonicalSyntaxToggleProps) {
  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      canonical syntax
    </label>
  );
}
