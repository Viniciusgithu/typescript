/* 

Em um projeto React, o estado pode ser tipado
Usa-se a lógica abaixo

*/

//Exportar o type que está no componente
export type CardProps = {
  name: string;
  time: string;
}

/*

Importar onde será utilizado
import { Card, CardProps } from '../../components/Card';


Passas as propriedades para o estado
const [students, setStudents] = useState<CardProps[]>([]);

*/