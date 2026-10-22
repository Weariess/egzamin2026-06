using System;

namespace KonsolaHasla
{
    class Program
    {
        /************************************************
        nazwa funkcji:           GenerujHaslo
        opis funkcji:            Metoda generuje 12-znakowe hasło 
                                 składające się z małych i wielkich liter, 
                                 znaków diakrytycznych, cyfr i znaków specjalnych.
        parametry:               brak
        zwracany typ i opis:     string - zwraca wygenerowane 12-znakowe hasło
        autor:                   Wiktoria
        ************************************************/
        static string GenerujHaslo()
        {
            Random rnd = new Random();

            string male = "abcdefghijklmnopqrstuvwxyz";
            string wielkie = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string diakryczne = "ąęłńóśżźĄĘŁŃÓŚŻŹ";
            string cyfry = "1234567890";
            string specjalne = "!@#$%^&*()_+";

            char[] hasloTab = new char[12];
            int indeks = 0;

            for (int i = 0; i < 3; i++)
                hasloTab[indeks++] = male[rnd.Next(male.Length)];

            for (int i = 0; i < 3; i++)
                hasloTab[indeks++] = wielkie[rnd.Next(wielkie.Length)];

            for (int i = 0; i < 2; i++)
                hasloTab[indeks++] = diakryczne[rnd.Next(diakryczne.Length)];

            for (int i = 0; i < 2; i++)
                hasloTab[indeks++] = cyfry[rnd.Next(cyfry.Length)];

            for (int i = 0; i < 2; i++)
                hasloTab[indeks++] = specjalne[rnd.Next(specjalne.Length)];

            for (int i = 0; i < 12; i++)
            {
                int losowaPozycja = rnd.Next(12);
                char temp = hasloTab[i];
                hasloTab[i] = hasloTab[losowaPozycja];
                hasloTab[losowaPozycja] = temp;
            }

            string haslo = new string(hasloTab);
            return haslo;
        }

        static void Main(string[] args)
        {

            for (int i = 1; i <= 5; i++)
            {
                string wygenerowaneHaslo = GenerujHaslo();
                Console.WriteLine($"Wygenerowane hasło nr {i}: {wygenerowaneHaslo}");
            }

        }
    }
}