let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[(styles.length / 2 - 1).toFixed()] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
