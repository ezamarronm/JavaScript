CSS_C=sass
CSS_FLAGS=
CSS_SRC=scss #carpeta fuente donde tienes tus archivos scss
CSS_OUT=css #carpeta donde se crearan tus archivos css y css.map
CSS_TARGETS=$(patsubst $(CSS_SRC)/%.scss,%.css,$(wildcard $(CSS_SRC)/*.scss))

all: clean css

final: CSS_FLAGS = -t compact --sourcemap=none
final: all

css: $(CSS_TARGETS)

.SECONDEXPANSION:
%.css: $(CSS_SRC)/$$*.scss
	$(CSS_C) $(CSS_FLAGS) $? $(CSS_OUT)/$@

 clean:
	rm -f $(CSS_OUT)/*

	#para ejecutar el makefile unicamente coloca en consola "make" sin comillas
	#para eliminar los archivos css ejecuta "make clean" sin comillas q
	#https://gist.github.com/emilbjorklund/77cb39aafd04d60ef1f5