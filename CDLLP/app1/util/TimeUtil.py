import time


def getCurrentDate():
	date = time.strftime("yyyy-MM-dd", time.localtime())
	return date

def getCurrentDate1():
	date = time.strftime("yyyyMMdd", time.localtime())
	return date

def getCurrentMonth():
	date = time.strftime("yyyy_MM", time.localtime())
	return date


def getCurrentTime():
	date = time.strftime("HH:mm:ss", time.localtime())
	return date

def getCurrentTime1():
	date = time.strftime("HHmmss", time.localtime())
	return date

def getCurrentTimeAndDate():
	date = time.strftime("yyyy-MM-dd HH:mm:ss", time.localtime())
	return date
