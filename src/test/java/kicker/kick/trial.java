package kicker.kick;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;

public class trial {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        System.out.println(calendar.getTime());
        LocalDate today = LocalDate.now();
        System.out.println(today);
    }
}
