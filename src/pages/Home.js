import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
      maxWidth="1440px"
      sx={{
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        backgroundImage:
          'url("https://images.pexels.com/photos/5797898/pexels-photo-5797898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
      }}
    >
      <Typography
        variant="h2" // устанавливаем размер заголовка
        fontWeight={500} // устанавливаем жирность текста
        textAlign="center" // устанавливаем выравнивание по центру
        marginBottom={4} // добавляем отступ снизу
        color="white"
        sx={{
          backgroundColor: '#1976d2',
          padding: '30px',
          borderRadius: '10px',
          fontSize: '18px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
          '@media (min-width: 768px)': {
            minWidth: '200px',
            fontSize: '24px',
          },
          '@media (min-width: 1200px)': {
            minWidth: '300px',
            fontSize: '32px',
          },
        }}
      >
        Your contacts book
      </Typography>
    </Container>
  );
}
