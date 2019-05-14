package kicker.kick;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.MonthDay;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class trial {
    public static void main(String[] args) throws Exception{
        String datka="01/04";
        Pattern p = Pattern.compile("^[0-9]{1,2}/[0-9]{1,2}$");
        Matcher matcher=p.matcher(datka);
        System.out.println(matcher.matches());
        DateTimeFormatter my=DateTimeFormatter.ofPattern("d/M");
        DateTimeFormatter bd=DateTimeFormatter.ofPattern("yyyy-MM-dd");
        //LocalDate ld = LocalDate.parse( datka, my);
        MonthDay monthDay=MonthDay.parse(datka,my);
        LocalDate ld=monthDay.atYear(2019);
        //String sss=bd.format(my.parse(datka));


        System.out.println(ld);
    }
}
