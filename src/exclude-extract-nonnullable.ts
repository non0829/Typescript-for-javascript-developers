export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>
type NonFunctionType = Exclude<SomeTypes, DebugType>

type ExcludingFunction = Exclude<SomeTypes, Function>

type FunctionByExtract = Extract<SomeTypes, DebugType>

type NullableTypes = string | number | null | undefined
type NonNullableTyles = NonNullable<NullableTypes>