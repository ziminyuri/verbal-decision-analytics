# Generated by Django 3.1.2 on 2020-11-02 20:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201102_2016'),
    ]

    operations = [
        migrations.AddField(
            model_name='pairsofoptions',
            name='id_option_2',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='id_option_2', to='api.option'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='pairsofoptions',
            name='winner_option',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='winner_option', to='api.option'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='pairsofoptions',
            name='id_option_1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='id_option_1', to='api.option'),
        ),
    ]
