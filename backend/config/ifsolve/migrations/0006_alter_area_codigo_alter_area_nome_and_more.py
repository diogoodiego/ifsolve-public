# Generated by Django 4.1.3 on 2022-12-19 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ifsolve', '0005_alter_item_tipo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='area',
            name='codigo',
            field=models.CharField(max_length=50, verbose_name='Código'),
        ),
        migrations.AlterField(
            model_name='area',
            name='nome',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='avaliacao',
            name='titulo',
            field=models.CharField(max_length=200, verbose_name='Título'),
        ),
        migrations.AlterField(
            model_name='item',
            name='assunto',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='item',
            name='titulo',
            field=models.CharField(max_length=200, verbose_name='Título'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='nome',
            field=models.CharField(max_length=100),
        ),
    ]
