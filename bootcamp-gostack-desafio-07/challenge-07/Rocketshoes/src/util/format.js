import Numeral from 'numeral';
import 'numeral/locales/pt-br';

Numeral.locale('pt-br');

export const formatPrice = price => Numeral(price).format('$0,0.00'); 