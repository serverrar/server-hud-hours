local ESX = nil
local stage = 1
local micmuted = false
local voicelevel = 0

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getShburasi45aredObjburasi45ect', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end

	TriggerEvent('esx:setMoneyDisplay', 0.0)
	ESX.UI.HUD.SetDisplay(0.0)

	ESX.PlayerData = ESX.GetPlayerData()

	Wait(1000)

	StartShowHudThread()
end)

function GetMoney(type)
	for k,v in pairs(ESX.PlayerData.accounts) do 
		if v.name == type then
			return v.money
		end
	end
end

function StartShowHudThread()
	Citizen.CreateThread(function()
		while true do
			Citizen.Wait(1000)

			ESX.PlayerData.accounts = ESX.GetPlayerData().accounts
			
			SendNUIMessage({
				type = "update",
				id = GetPlayerServerId(PlayerId()),
				money = GetMoney("money"),
				bank = GetMoney("bank"),
				black_money = GetMoney("black_money")
			})

			SendNUIMessage({action = "muted", muted = micmuted})
		end
	end)
end




RegisterNetEvent('hud:range')
AddEventHandler('hud:range', function(voiceRange)
	print(voiceRange)
	if micmuted == false then


end
end)




