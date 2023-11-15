import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addNewTodo, changeInputValue } from '@/store/reducers/todo';
import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';

export function Form() {
  const dispatch = useAppDispatch();
  // Récupération de la valeur actuelle de l'input depuis le store Redux.
  const inputValue = useAppSelector((state) => state.todo.inputValue);

  // Gestion du changement de l'input.
  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputValue(event.target.value));
  };

  // Gestion de la soumission du formulaire.
  const handleSubmitAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addNewTodo());
  };

  const formEndRef = useRef<HTMLDivElement>(null);
  // Utilisation de useEffect pour faire défiler automatiquement le formulaire
  // à chaque mise à jour de la valeur de l'input.
  useEffect(() => {
    // Si formEndRef est défini, faire défiler jusqu'à cet élément.
    formEndRef.current?.scrollIntoView();
  }, [inputValue]);

  return (
    <Card color="transparent" shadow={false}>
      <form
        onSubmit={handleSubmitAddTodo}
        className="mb-2 mt-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6" ref={formEndRef}>
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Ajouter une tache à la liste
          </Typography>
          <Input
            value={inputValue}
            onChange={handleChangeInputValue}
            placeholder="Exemple: Rendez vous dentiste"
            type="text"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{ className: 'before:content-none after:content-none' }}
          />
        </div>
        <Button className="mt-4" fullWidth type="submit">
          Ajouter
        </Button>
      </form>
    </Card>
  );
}
