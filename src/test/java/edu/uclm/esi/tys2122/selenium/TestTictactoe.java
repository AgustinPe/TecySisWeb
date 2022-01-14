package edu.uclm.esi.tys2122.selenium;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import edu.uclm.esi.tys2122.dao.UserRepository;



@SpringBootTest
@ExtendWith(SpringExtension.class)

public class TestTictactoe {

	private static WebDriver driverPepe, driverAnonimo;
	
	@Autowired
	private static UserRepository userDao;
	
	@BeforeAll
	public static void setUp() throws Exception {
		String userHome = System.getProperty("user.home");
		userHome = userHome.replace('\\', '/');
		if (!userHome.endsWith("/"))
			userHome = userHome + "/";
		
		System.setProperty("webdriver.chrome.driver", userHome + "chromedriver.exe");
		
		driverPepe = crearDriver(0, 0);
		driverAnonimo = crearDriver(1000,0);
	}
	
	private static WebDriver crearDriver(int x, int y) {
		WebDriver driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.manage().window().setSize(new Dimension(1000, 1000));
		driver.manage().window().setPosition(new Point(x, y));
		driver.get("http://localhost");
		return driver;
	}
	
	@Test
	@Order(1)
	public void testRegistrar(){
		WebElement linkCrearCuenta = driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/div/div[3]/div/a"));
		linkCrearCuenta.click();
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/div/button")).click();
		driverPepe.findElement(By.xpath("/html/body/div/div[2]/div/oj-navigation-list/div/div/ul/li[1]/a/span")).click();
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/div/div[1]/div[3]/button")).click();
		
		pause(500);
		
		//WebElement etiqueta = driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/h1"));
		//assertTrue(etiqueta.getText().contains("Juegos disponibles"));
		
		this.UnirseAPartida();
	}
	
	
	public void UnirseAPartida(){
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/div/div[1]/button")).click();
		
		driverAnonimo.findElement(By.xpath("/html/body/div/div[2]/div/oj-navigation-list/div/div/ul/li[5]/a/span")).click();
		pause(500);
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/div/div[1]/button")).click();
		
		jugar();
	}
	
	private void jugar() {

		
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();

		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).sendKeys("hola");
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).sendKeys("hola");
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[2]")).click();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[2]")).click();
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).clear();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).clear();
		
		pause(300);
		
		WebElement jctPepe = driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/div[5]/span"));
		String nombreJCT = jctPepe.getText();
		
		WebDriver djct = nombreJCT.equals("pepe") ? driverPepe :driverAnonimo;
		
		// movimiento 1
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).sendKeys("1");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).sendKeys("1");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[1]")).click();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).clear();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).clear();
		
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		
		djct = djct==driverPepe ? driverAnonimo : driverPepe;
		
		// movimiento 2
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).sendKeys("2");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).sendKeys("2");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[1]")).click();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).clear();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).clear();
		
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		
		djct = djct==driverPepe ? driverAnonimo : driverPepe;
		
		//movimiento 3
		
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).sendKeys("1");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).sendKeys("2");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[1]")).click();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).clear();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).clear();
		
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		
		djct = djct==driverPepe ? driverAnonimo : driverPepe;
		
		//movimiento 4
		
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).sendKeys("2");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).sendKeys("1");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[1]")).click();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).clear();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).clear();
		
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		
		djct = djct==driverPepe ? driverAnonimo : driverPepe;
		
		//movimiento 5
		
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).sendKeys("1");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).sendKeys("0");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[1]")).click();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[10]")).clear();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/input[11]")).clear();
		
		driverPepe.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		driverAnonimo.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/button[2]")).click();
		
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).sendKeys("he ganado buena partida");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[2]")).click();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).clear();
		
		djct = djct==driverPepe ? driverAnonimo : driverPepe;
		
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).sendKeys("he perdido buena partida");
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[2]")).click();
		djct.findElement(By.xpath("/html/body/div/oj-module/div[1]/div[2]/div/div/ol/li/form/input[1]")).clear();

		
		
		
	}

	@AfterAll
	public static void tearDown() {
		driverPepe.quit();
		
		
		
		driverAnonimo.quit();
		//userDao.deleteAll();
	}
	
	private static void pause(long milis) {
		
		try {
			Thread.sleep(milis);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
